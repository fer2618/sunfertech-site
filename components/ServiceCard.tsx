import { ReactNode } from 'react'


export default function ServiceCard({ title, children, icon }: { title: string; children: ReactNode; icon?: ReactNode }){
return (
<article className="card h-full" role="listitem">
<div className="flex items-start gap-3">
<div aria-hidden className="text-2xl">{icon ?? '🔧'}</div>
<div>
<h3 className="text-lg font-semibold">{title}</h3>
<div className="text-neutral-300 text-[0.97rem] mt-1">{children}</div>
</div>
</div>
</article>
)
}