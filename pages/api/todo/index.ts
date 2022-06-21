import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../utils/supabaseClient'
import { getSession } from 'next-auth/react'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (req.method === 'POST') {
    const { title, schedule } = JSON.parse(req.body)

    // const response = await supabase.from('todo').insert({ title, schedule })

    let return_json
    const response = await fetch('http://localhost:8000/api/v1/tasks/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, schedule }),
    })

    return_json = await response.json()
    console.log(return_json)

    res.status(response.status).json(return_json)
  }
}
