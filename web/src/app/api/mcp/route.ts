/**
 * The catalog MCP transport is retired. Reference collection and reverify now
 * run through skills plus the deterministic browser evidence pipeline.
 */
export const dynamic = "force-dynamic";

function retired(): Response {
  return Response.json(
    {
      error: "gone",
      message: "The oh-my-design MCP connector is retired. Use skills or fetch /<id>/design.md directly.",
      docs: "https://oh-my-design.kr/docs",
    },
    { status: 410, headers: { "cache-control": "public, max-age=3600" } },
  );
}

export { retired as GET, retired as POST };
