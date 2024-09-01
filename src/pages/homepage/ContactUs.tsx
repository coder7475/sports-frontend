import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <div>
      <h2 className="text-5xl font-extrabold h-36 flex justify-center items-center">
        Contact Us
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Your Message is send successfully!");
        }}
        className="border container px-5 py-24 mx-auto flex flex-col gap-5 rounded-lg"
      >
        <EmailInput />
        <MessageInput />
        <Button
          type="submit"
          className="border w-fit text-xl hover:text-black px-4 py-2 rounded-lg bg-card text-card-foreground mx-auto font-bold hover:bg-primary"
        >
          Send
        </Button>
      </form>
    </div>
  );
};
function EmailInput() {
  return (
    <label htmlFor="email" className="flex flex-col gap-4">
      <h4 className="text-xl font-semibold">Your Email:</h4>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="john@example.com"
        className="w-full rounded-sm h-10 bg-card px-2 text-xl text-white"
      />
    </label>
  );
}

function MessageInput() {
  return (
    <label htmlFor="body" className="flex flex-col gap-4">
      <h4 className="text-xl font-semibold">Your Message:</h4>
      <textarea
        rows={10}
        name="body"
        id="body"
        placeholder="Message Body"
        className="w-full rounded-sm bg-card text-white p-2 text-xl"
      />
    </label>
  );
}

export default ContactUs;
