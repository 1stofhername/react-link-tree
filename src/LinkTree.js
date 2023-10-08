import link from './links.json';
import Link from './Link';

export default function LinkTree () {
    const linkList = link;

    return(
        <div className="link-tree-div">
            {linkList.map(link=>
                <Link key={link} link={link} />
            )}
        </div>
    )
};