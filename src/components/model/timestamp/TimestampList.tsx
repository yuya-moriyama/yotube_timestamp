
export const TimestampList = () => {
    return (
        <div className='card h-100'>
            <div className='card-header'>
                Timestamp List
            </div>
            <div className='card-body'>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item small p-1"><span className="text-primary">00:01:12</span> | タイトル1</li>
                    <li className="list-group-item small p-1"><span className="text-primary">00:02:13</span> | タイトル2</li>
                    <li className="list-group-item small p-1"><span className="text-primary">00:03:14</span> | タイトル3</li>
                    <li className="list-group-item small p-1"><span className="text-primary">00:04:15</span> | タイトル4</li>
                    <li className="list-group-item small p-1"><span className="text-primary">00:05:16</span> | タイトル5</li>
                </ul>
            </div>
        </div>
    );
}