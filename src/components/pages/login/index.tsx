import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { LockIcon, MailIcon } from "lucide-react";

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="bg-primary rounded-full p-2">
            <LockIcon className="h-8 w-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Bem-vindo de volta
          </CardTitle>
          <CardDescription>Faça login para continuar</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input id="password" type="password" className="pl-10" />
              </div>
            </div>
            <Button className="w-full">Entrar</Button>
          </form>
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-primary hover:underline">
              Esqueceu sua senha?
            </a>
          </div>
          <div className="mt-4 text-center">
            <span className="text-muted-foreground text-sm">
              Não tem uma conta?
            </span>{" "}
            <a href="#" className="text-sm text-primary hover:underline">
              Criar conta
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
