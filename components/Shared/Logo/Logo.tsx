import Link from "next/link";

export function Logo() {
  return (
    <div className="flex justify-center">
      <Link href="/" className="font-extrabold text-5xl text-[#d51c45]">
        StreamPrime
      </Link>
    </div>
  );
}
