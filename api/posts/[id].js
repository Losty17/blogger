export default function handler(request, response) {
  const { id } = request.query;

  response.status(200).json({
    id,
  });
}
