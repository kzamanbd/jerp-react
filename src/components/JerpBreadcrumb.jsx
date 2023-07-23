import { Link } from 'react-router-dom';

export default function JerpBreadcrumb({ title, breadcrumb }) {
    const generatedPath = (index) => {
        const path = [];
        for (let i = 0; i <= index; i++) {
            if (index != breadcrumb.length - 1) {
                path.push(breadcrumb[i]);
            }
        }

        return path.map((item) => item?.toLowerCase().replace(/ /g, '-')).join('/');
    };

    return (
        <div className="breadcrumb_area d-flex align-items-center justify-content-between">
            <h6 className="m-0 px-3">{title}</h6>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb d-flex align-items-center">
                    <li className="pr-1">
                        <span className="material-icons home-icon"> home </span>
                    </li>
                    {breadcrumb.map((item, index, array) => (
                        <li className="breadcrumb-item" key={item}>
                            {array.length - 1 == index ? (
                                <span className="breadcrumb-link">{item}</span>
                            ) : (
                                <Link to={`/${generatedPath(index)}`} className="breadcrumb-link">
                                    {item}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}
