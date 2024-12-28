const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function Experience({company, role, start, end, desc, link} : {company : string, role : string, start : { year : number, month: number}, end : { year : number, month: number} | undefined, desc : string, link : string | undefined} ) {
    const time = [`${MONTHS[start.month - 1]} ${(end && start.year == end.year) ? '' : start.year % 2000} `, ` ${end ? MONTHS[end.month - 1] + ' ' + end.year % 2000 : 'Present'}`]

    return(
        <div className="flex flex-col xl:flex-row gap-x-9 w-full">
            <p className="w-[6.25rem] shrink-0 text-xs font-medium text-black/50 leading-loose">{time[0]}&#8211;{time[1]}</p>
            <div className="xl:w-fit xl:grow flex flex-col gap-y-2">
                <p className="font-medium">{role} &#183; {link ? <a href={link} className="hover:underline">{company}</a> : company}</p>
                <p className="text-sm">{desc}</p>
            </div>
        </div>
    );
}