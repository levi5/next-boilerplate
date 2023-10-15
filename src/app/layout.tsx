export const metadata = {
	title: {
		default: 'Next Boilerplate',
		template: '%s | Next Boilerplate'
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head></head>
			<body>{children}</body>
		</html>
	)
}
