import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../utils/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, schedule } = JSON.parse(req.body)
    const response = await supabase.from('todo').insert({ title, schedule })
    let return_json
    if (response.data) {
      return_json = response.data[0]
    } else {
      return_json = response.error
    }

    res.status(response.status).json(return_json)
  }
}
