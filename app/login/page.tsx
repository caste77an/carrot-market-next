import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";

export default function LogIn() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={[]}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <Button text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
