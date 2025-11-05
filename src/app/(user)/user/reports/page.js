import { getYearlyReport } from '../../../../../lib/action/reports-action';
import ReportsClient from './reports-client';

export default async function ReportsPage() {
    const reportsData = await getYearlyReport();

    console.log(reportsData);

    return (
        <div className=" bg-gray-100">
            <ReportsClient reports={reportsData} />
        </div>
    );
}
