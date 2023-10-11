import link from '../data/links.json';
import Link from './Link';

export default function LinkTree () {
    const linkList = link;

    return(
        <div className="link-tree-div">
            {linkList.map(link=>
                <Link key={link.id} link={link} />
            )}
        </div>
    )
};