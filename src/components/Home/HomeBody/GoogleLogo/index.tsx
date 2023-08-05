import Image from "next/image";

export default function GoogleLogo() {
  return (
    <Image
      width={300}
      height={100}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
      alt="Google logo"
      style={{ width: "min(300px, 100%)", maxHeight: "100px" }}
      priority={true}
    />
  );
}
