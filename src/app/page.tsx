"use client";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useContext, useState } from "react";
import client from "@/lib/hexabase";
import { useRouter } from 'next/navigation';
import { HexabaseContext } from '@/contexts/hexabase';

export default function Home() {
  const [email, setEmail] = useState('demo5@moongift.jp');
  const [password, setPassword] = useState('K4c%j%vzR7sQKS$u&Uo%');
  const router = useRouter();
  const { client } = useContext(HexabaseContext);

  const login = async () => {
    await client.login({ email, password });
    await client.setWorkspace(process.env.NEXT_PUBLIC_WORKSPACE);
    router.push('/reports');
  };

  return (
    <main>
      <div className="flex items-center min-h-screen px-4">
        <div className="mx-auto space-y-4 w-full max-w-sm">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              className="w-full"
              type="submit"
              onClick={login}
            >
              Login
            </Button>
          </div>
        </div>
        </div>
    </main>
  );
}
