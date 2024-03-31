const eidProjects = [
	{
		id: "eid-ul-fitr-2022",
		title: "Eid Ul Fitr - 1443/2022",
		href: "/2022",
	},
	{
		id: "eid-ul-fitr-2023",
		title: "Eid Ul Fitr - 1444/2023",
		href: "/2023",
	},
	{
		id: "eid-ul-adha-2023",
		title: "Eid Ul Adha - 1444/2023",
		href: "/2023/adha",
	},
	{
		id: "eid-ul-fitr-2024",
		title: "Eid Ul Fitr - 1445/2024",
		href: "/2024",
	},
]

export default function EidProjects() {
	return (
		<div className="min-w-screen min-h-screen flex flex-col bg-gray-200">
			<main className="max-w-2xl mx-auto flex flex-col py-14">
				<h1 className="text-6xl text-center mb-6 font-bold">Eid Mubarak</h1>
				<p className="mb-10">
					This is the list of projects I created for celebrating Eid
				</p>
				<ul className="grid grid-cols-2 gap-6">
					{eidProjects.map((eid) => (
						<li
							className="w-full rounded-lg flex flex-col gap-2 p-2 bg-gray-300 shadow-xl"
							key={eid.id}
						>
							<a
								href={eid.href}
								className="block w-full rounded-lg overflow-hidden"
								target="_blank"
							>
								<img
									src={`/img/${eid.id}.png`}
									alt={eid.title}
									className="rounded-md overflow-hidden hover:transform hover:scale-105 duration-300"
								/>
							</a>
							<h2 className="font-bold px-1">{eid.title}</h2>
						</li>
					))}
				</ul>
			</main>
		</div>
	)
}
