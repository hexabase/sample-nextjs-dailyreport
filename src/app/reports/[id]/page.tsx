"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1V401qiBfFu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { HexabaseContext } from "@/contexts/hexabase";
import { Item, User } from "@hexabase/hexabase-js";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import parse from 'html-react-parser';

export default function Report({ params }: { params: { id: string } }) {
	const { client } = useContext(HexabaseContext);
	const router = useRouter();
	const [item, setItem] = useState<Item | null>(null);
	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		if (!client.currentWorkspace) {
			router.push("/");
			return null;
		}
		const project = await client.currentWorkspace!.project(process.env.NEXT_PUBLIC_PROJECT);
		const datastore = await project.datastore(process.env.NEXT_PUBLIC_DATASTORE);
		const item = await datastore.item(params.id);
		setItem(item);
	};

	const toHTML = (text: string | undefined): string => {
		if (!text) return '';
		return text.replace(/\n/g, '<br />');
	};

  return (
    <div className="grid max-w-3xl gap-4 px-4 mx-auto">
      <div className="flex items-center gap-4">
        <Link className="flex items-center gap-2 text-sm" href="/reports">
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back</span>
        </Link>
        <h1 className="text-3xl font-bold">Daily Report</h1>
      </div>
      <div className="grid gap-2">
        <div className="grid gap-1 text-sm prose prose-sm prose-p:sm">
					<p>
						<span className="font-bold">{item?.get<string>('Title')}</span>
					</p>
					<p className="pt-4">
						{parse(toHTML(item?.get<string>('body')))}
					</p>
        </div>
      </div>
      <div className="grid gap-1 text-xs">
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4 h-4" />
          <span>{item?.get<Date>('date')?.toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <UserIcon className="w-4 h-4" />
          <span>{item?.get<User[]>('user')?.[0]?.userName}</span>
        </div>
      </div>
    </div>
  )
}

function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
