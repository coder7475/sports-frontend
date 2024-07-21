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
        className="border p-2 w-[50%] mx-auto flex flex-col gap-5 rounded-lg"
      >
        <EmailInput />
        <MessageInput />
        <button
          type="submit"
          className="border w-fit px-2 py-1 rounded-lg bg-card text-card-foreground mx-auto font-bold hover:bg-primary"
        >
          Send
        </button>
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
        className="w-full rounded-sm h-10 bg-card text-black px-2"
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
        className="w-full rounded-sm bg-card text-black p-2"
      />
    </label>
  );
}

export default ContactUs;
