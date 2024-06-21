const LinkView = ({ title, content, download = false }) => {
    const action = () => {
        if (download) {
            const a = document.createElement('a')
            const url = '/pdfs/Metsera_InnovationFramework_240503_02_Portal.pdf'
            a.href = url
            a.download = url.split('/').pop()
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
        }
    }
    return (
        <div className="text-sm text-white">
            <img
                src="/images/download.png"
                width={20}
                className="cursor-pointer mb-2"
                onClick={action}
            />
            {title && (
                <>
                    <div className="font-semibold mt-4">{title}</div>
                    <hr className="my-1" />
                </>
            )}
            <div className="font-light">{content}</div>
        </div>
    )
}

export default LinkView
