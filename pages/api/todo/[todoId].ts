import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../utils/supabaseClient'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { todoId } = req.query
  if (req.method === 'DELETE') {
    const { data, error } = await supabase
      .from('todo')
      .delete()
      .match({ id: +todoId })
    console.log(data)
    console.log(error)
    res.status(204).json({ result: 'ok' })
  }
  if (req.method === 'PUT') {
    const todo_update = JSON.parse(req.body)
    const { data, error } = await supabase
      .from('todo')
      .update({ is_complete: todo_update.is_complete })
      .match({ id: +todoId })
    res.status(200).json(data)
  }
}

export default handler
