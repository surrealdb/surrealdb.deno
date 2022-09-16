import { customAlphabet } from "https://deno.land/x/nanoid/mod.ts";

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

export default function() {
	return nanoid();
}
