import links from '../data/data.json';
import Link from './Link';

export default function LinkTree () {
    const linkList = links;

    return(  
        <div className="overlay-container" id="link-tree-div">
            <div className='overlay'></div>
            {linkList.map(link=>
                <Link key={link.id} link={link} />
            )}
        </div>
    )
};