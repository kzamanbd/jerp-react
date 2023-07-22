export default function JerpBreadcrumb({ title, breadcrumb }) {
    return (
        <div className="layout-breadcrumb">
            <div className="breadcrumb_area">
                <h5>{title}</h5>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        {breadcrumb.map((item, index) => (
                            <li
                                key={item}
                                className={
                                    index === breadcrumb.length - 1
                                        ? 'breadcrumb-item active'
                                        : 'breadcrumb-item'
                                }>
                                <a href="/">{item}</a>
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
}
