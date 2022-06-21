import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../utils/supabaseClient'
import { getSession } from 'next-auth/react'
import axios from 'axios'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  const { todoId } = req.query
  const url = `http://localhost:8000/api/v1/tasks/${todoId}/`
  if (req.method === 'DELETE') {
    // const { data, error } = await supabase
    //   .from('todo')
    //   .delete()
    //   .match({ id: +todoId })
    // console.log(data)
    // console.log(error)

    const response = await fetch(url, config)
    const data = await response.json()
    console.log(data)

    res.status(204).json({ result: 'ok' })
  }
  if (req.method === 'PUT') {
    // const todo_update = JSON.parse(req.body)
    const data = req.body

    const resp = await axios({
      url: url,
      method: 'put',
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
      data: data,
    })
      .then((resp) => {
        console.log(resp)
      })
      .catch((error) => {
        console.log(error)
      })

    res.status(200).json({ result: 'ok' })
  }
}

export default handler
