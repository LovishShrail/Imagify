import axios from 'axios'
// import fs from 'fs'
import FormData from 'form-data'
import userModel from '../models/userModel.js'

export const generateImage = async (req, res) => {

  try {

    const { userId, prompt } = req.body

    if (!userId || !prompt) {
      return res.json({ success: false, message: 'Missing Details' })
    }

    // Atomically deduct 1 credit only if balance > 0 (prevents race condition)
    const user = await userModel.findOneAndUpdate(
      { _id: userId, creditBalance: { $gt: 0 } },
      { $inc: { creditBalance: -1 } },
      { new: true }
    )

    if (!user) {
      // Either user doesn't exist or has no credits left
      const existingUser = await userModel.findById(userId)
      return res.json({
        success: false,
        message: existingUser ? 'No Credit Balance' : 'User not found',
        creditBalance: existingUser ? existingUser.creditBalance : 0
      })
    }

    // Creation of new multi/part formdata
    const formdata = new FormData()
    formdata.append('prompt', prompt)

    // Calling Clipdrop API
    const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formdata, {
      headers: {
        'x-api-key': process.env.CLIPDROP_API,
      },
      responseType: "arraybuffer"
    })

    // Conversion of arrayBuffer to base64
    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`

    // Sending Response
    res.json({ success: true, message: "Image Generated Successfully", resultImage, creditBalance: user.creditBalance })

  } catch (error) {
    console.log(error.message)
    res.json({ success: false, message: error.message })
  }
}