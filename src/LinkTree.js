import Link from "./Link";

export default function LinkTree () {
    const linkList = ["hello", "hi", "yea"];

    return(
        <div className="link-tree-div">
            {linkList.map((link)=><Link key={link} link={link} />)}
        </div>
    )
};