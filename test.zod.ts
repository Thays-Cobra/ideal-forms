import * as z from "zod";

const User = z.object({
	username: z.string(),
	xp: z.number(),
});

function test() {
	const result = User.safeParse({ username: "42", xp: 100 });

	if (!result.success) {
		return result.error;
	} else {
		return result.data;
	}
}

console.log(test());
