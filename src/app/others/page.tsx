import Column from "./ui/column";

export type blog = {
    id:number;
    title: string;
    href: string;
};

const blogs:blog[] = [
    {
        id: 1,
        title: 'このサイトについて',
        href: "/others/website"
    },
];

export default function Others(){
    return(
        <>
        <p></p>
        {blogs.map((blog) =>{
                return(
                    <div className="indent-4" key = {blog.id}>
                        <Column blog = {blog}/>
                    </div>
                );
            })}
        </>
    );
}