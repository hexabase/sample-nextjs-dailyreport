"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/57rgaX9aAHs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useContext, useState } from "react"
import { HexabaseContext } from "@/contexts/hexabase";
import { useRouter } from "next/navigation";

export default function Component() {
	const { client } = useContext(HexabaseContext);
	const router = useRouter();
	const [title, setTitle] = useState('今日の報告');
	const [body, setBody] = useState(`10:00 客先にて打ち合わせ
	12:00 昼食
	13:00 顧客訪問
	16:00 本社に戻る
	17:00 退社`);
	const [date, setDate] = useState('2024-03-28');

	if (!client.currentUser) {
		router.push('/');
		return null;
	}
	const save = async () => {
		const project = await client.currentWorkspace!.project(process.env.NEXT_PUBLIC_PROJECT);
		const datastore = await project.datastore(process.env.NEXT_PUBLIC_DATASTORE);
		const item = await datastore.item();
		await item
			.set('Title', title)
			.set('body', body)
			.set('date', new Date(date))
			.set('user', [client.currentUser!])
			.save();
		router.push('/reports');
	};

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <div>Write a Report</div>
        <p className="text-sm leading-none mt-1 text-gray-500 dark:text-gray-400">
          Your daily report will be shared with your team.
        </p>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input
						id="title"
						placeholder="Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="body">Body</Label>
          <Textarea
						id="body"
						placeholder="Body"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					/>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="date">Date</Label>
          <Input
						id="date"
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
        </div>
      </CardContent>
      <CardFooter>
        <Button
					size="sm"
					onClick={save}
				>Submit</Button>
      </CardFooter>
    </Card>
  )
}

