import JerpBreadcrumb from 'components/JerpBreadcrumb';
import React from 'react';

function OrderApproval() {
    const breadcrumb = ['Local Sales', 'Order', 'Create'];
    return (
        <div>
            <JerpBreadcrumb title="Order Approval" breadcrumb={breadcrumb} />
        </div>
    );
}

export default OrderApproval;
