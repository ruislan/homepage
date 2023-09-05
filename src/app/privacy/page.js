import Paragraph from "../components/paragraph";

export const metadata = {
    title: '声明',
    description: '本站相关声明',
};

export default async function PrivacyPage() {
    return (
        <div>
            <h1 className='font-bold text-2xl mb-8'>声明</h1>

            <Paragraph>
                <h3>免责声明</h3>
                <p>本站提供的所有内容仅供学习、分享与交流，不保证内容的正确性和时效性。通过使用本站内容随之而来的风险与本站无关。当使用本站时，代表你已接受本页的相应条款。</p>

                <h3>关于版权</h3>
                <p>本站提供的所有原创性内容的版权归本站主所有。</p>
                <p>本站提供的所有原创性内容可引用在其他任何地方，但必须注明内容来源，若商业性引用请联系本站主。商业性引用包括了收费、购买、打赏等。</p>
                <p> 本站提供的所有内容都不会涉及政治话题，也不能作为政治观点论据。</p>
                <p>对于本站可能会引用到非本站原创性内容，会在对方的许可条件下进行引用，同时也会在站中或者脚注中指明引用来源，若引用来源更改了许可或认为本站无权引用，可随时联系，本站会立即删除相应内容。</p>

                <h3>隐私原则</h3>
                <p>浏览本站时，本站不会记录你的任何信息。</p>
            </Paragraph>
        </div>
    );
}