import { Button } from "@/components/ui/button";
import Toast from "@/utils/toast";
import { FormEvent, useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const messageSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    Toast.fire({
      icon: "success",
      title: "Thank You for contacting us!",
    });

    // Clear the form
    setEmail("");
    setMessage("");
    setIsSending(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
      <div className="bg-card rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-foreground mb-6 sm:mb-8">
          Contact Us
        </h2>
        <form onSubmit={messageSubmit} className="flex flex-col gap-5 sm:gap-6">
          <EmailInput email={email} setEmail={setEmail} />
          <MessageInput message={message} setMessage={setMessage} />
          <Button
            type="submit"
            className="bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-primary/90 transform hover:-translate-y-1 hover:shadow-lg text-lg sm:text-xl"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
};

function EmailInput({
  email,
  setEmail,
}: Readonly<{
  email: string;
  setEmail: (value: string) => void;
}>) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="email"
        className="text-lg sm:text-xl font-semibold text-foreground"
      >
        Your Email:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="john@example.com"
        className="w-full rounded-lg border-2 border-input p-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition duration-300 ease-in-out text-base sm:text-lg"
        required
      />
    </div>
  );
}

function MessageInput({
  message,
  setMessage,
}: Readonly<{
  message: string;
  setMessage: (value: string) => void;
}>) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="body"
        className="text-lg sm:text-xl font-semibold text-foreground"
      >
        Your Message:
      </label>
      <textarea
        rows={6}
        name="body"
        id="body"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="How can we help you?"
        className="w-full rounded-lg border-2 border-input p-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition duration-300 ease-in-out resize-none text-base sm:text-lg"
        required
      />
    </div>
  );
}

export default ContactUs;
