export const POST = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (file == null) {
    return new Response("No file found", { status: 400 });
  }
}
