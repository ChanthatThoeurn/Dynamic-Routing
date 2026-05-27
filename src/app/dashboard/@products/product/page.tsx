import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-amber-200">
        Welcome to the Product page
      </h1>

      <div className="flex gap-4">
        <Link
          href="/dashboard/create"
          className="text-blue-500 hover:underline"
        >
          Create Product
        </Link>

        <Link
          href="/dashboard/edit"
          className="text-blue-500 hover:underline"
        >
          Edit Product
        </Link>
      </div>
    </div>
  );
}