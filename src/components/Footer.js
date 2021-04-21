import React from 'react'

function Footer() {
    return (
        <div className="fixed bottom-0 left-0 right-0 flex flex-col bg-gray-100 tex-sm text-gray-600">
            <div className="pt-4 pb-4 px-8">
                <p>Zambia</p>
            </div>
            <div className="border-b border-gray-200 w-full">
                {/* Bottom BOttom */}
            </div>
            <div className="flex gap-6 items-center py-2 px-8  justify-between ">
                <div className="flex gap-8 text-sm">
                    <a href="https://about.google/?utm_source=google-ZM&utm_medium=referral&utm_campaign=hp-footer&fg=1" className="hover:underline">About</a>
                    <a href="https://www.google.com/intl/en_zm/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" className="hover:underline">Advertising</a>
                    <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1" className="hover:underline">Bussiness</a>
                    <a href="https://google.com/search/howsearchworks/?fg=1" className="hover:underline">How Search Works</a>
                </div>
                <div className="flex gap-6">
                    <a href="https://policies.google.com/privacy?hl=en-ZM&fg=1" className="hover:underline">Privacy</a>
                    <a href="https://policies.google.com/terms?hl=en-ZM&fg=1" className="hover:underline">Terms</a>
                    <p >Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
