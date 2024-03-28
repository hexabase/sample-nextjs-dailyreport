"use client";
import { HexabaseContext } from "@/contexts/hexabase";
import { Project, Datastore, Item, User } from "@hexabase/hexabase-js";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tdM9pAoibrk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function Reports() {
	const { client } = useContext(HexabaseContext);
	const [items, setItems] = useState<Item[]>([]);
	const router = useRouter();
	
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
		const items = await datastore.items(undefined, {deep: true});
		setItems(items);
	}
	return (	
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <div className="flex items-center gap-4 text-lg font-bold">
          Daily Report
					<Button
						variant="outline"
						onClick={() => router.push("/reports/new")}
					>
            <PlusIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-2 md:gap-8 md:p-10">
        <Card>
          <CardContent className="p-2">
            <div className="overflow-hidden border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>User</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
									{items.map((item, index) => (
										<TableRow key={index}>
											<TableCell>
												<Link href={`/reports/${item.id}`}>
													{item.get<string>("Title")}
												</Link>
											</TableCell>
											<TableCell>{item.get<Date>("date")?.toLocaleDateString()}</TableCell>
											<TableCell>{item.get<User[]>("user")?.[0]?.userName}</TableCell>
										</TableRow>
									))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
	);
};