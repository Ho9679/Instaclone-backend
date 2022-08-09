import client from "../../client"

export default {
	Query: {
		seeProfile: (_, {username}) =>
		client.user.findUnique({ //findUnique는 prisma schema에서 @unique설정 해둔 인자만 인식한다.
			where: {
				username,
			},
		}),
	},
}