import Paragraph from "../components/paragraph";

export const metadata = {
    title: '装备',
    description: '以下是我常用的一些装备和配置，包括编程、生活、娱乐、健身等等',
};

export default function GearsPage() {
    return (
        <div>
            <h1 className='font-bold text-2xl mb-8'>我的装备</h1>
            <Paragraph>
                <h3>硬件</h3>
                <ul>
                    <li>16&quot; Macbook Pro (2019)</li>
                    <li>Inter i7 8700k / Nvidia GTX 1060 Ti / 海盗船 32G DDR4</li>
                    <li>24&quot; DELL 2K IPS / 27&quot; AOC 75Hz </li>
                    <li>AKKO 3108 9009Retro 108 键 / AKKO 3084 84 键</li>
                    <li>Razer 蝰蛇精英版 16000DPI</li>
                </ul>
            </Paragraph>
            <Paragraph>
                <h3>编码</h3>
                <ul>
                    <li>IDE: VSCode / JetBrains IDEA</li>
                    <li>主题颜色: 现代深色</li>
                    <li>终端: oh my zsh / starship</li>
                </ul>
            </Paragraph>
            <Paragraph>
                <h3>软件</h3>
                <ul>
                    <li>Docker</li>
                    <li>DBeaver</li>
                    <li>Chrome / Edge</li>
                    <li>Motrix</li>
                    <li>Termius</li>
                    <li>XMind</li>
                </ul>
            </Paragraph>
            <Paragraph>
                <h3>其他</h3>
                <ul>
                    <li>HUAWEI Watch GT 3 </li>
                    <li>EDIFIER LolliPods</li>
                    <li>IPhone X / Redmi Note 9</li>
                </ul>
            </Paragraph>
        </div>
    );
}