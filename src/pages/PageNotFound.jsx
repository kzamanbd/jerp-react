import NotFound from '@/assets/images/es_icons/es_404.svg';

function PageNotFound() {
    return (
        <div className="d-flex align-items-center justify-content-center page-not-found">
            <div className="text-center">
                <img src={NotFound} alt="404" />
                <h5 className="mt-2">Page Not found!</h5>
            </div>
        </div>
    );
}

export default PageNotFound;
