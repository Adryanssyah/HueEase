import { useContext, useEffect, useRef, useState } from 'react';
import { ArrowDownTrayIcon, ArrowPathIcon, ClipboardIcon, CodeBracketIcon, HeartIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { Button, Checkbox, Dialog, Flex, RadioGroup, Select, Text } from '@radix-ui/themes';
import { themeColors, themeColorShades, themeColorsWithoutShades } from '../../data/tailwindColors';
import { primaryDirections, radialDirections, conicDirections } from '../../data/directions';
import CardButton from '../../components/elements/CardButton';

import DownloadImage from '../../utils/DownloadImage';
import { Alert } from '../../context/AlertContext';

const PlaygroundLayout = ({ children }) => {
     return <>{children}</>;
};

const Title = () => {
     return (
          <div className="px-2">
               <h1 className="text-5xl font-semibold text-darks dark:text-white mb-8 xl:text-6xl">Playground</h1>
               <p className="text-gray-500 dark:text-gray-400 max-w-xl">Generate the gradient color you desire based on the color scale available in Tailwind CSS.</p>
          </div>
     );
};

const MainPlayground = ({ children }) => {
     const directions = [...primaryDirections, ...radialDirections, ...conicDirections];
     const [direction, setDirection] = useState(null);
     const [fromColors, setFromColors] = useState([]);
     const [viaColors, setViaColors] = useState([]);
     const [toColors, setToColors] = useState([]);
     const [from, setFrom] = useState(null);
     const [via, setVia] = useState(null);
     const [to, setTo] = useState(null);
     const [viaColor, setViaColor] = useState(true);
     const [textBgDark, setTextBgDark] = useState(true);

     const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

     const randomize = () => {
          setDirection(getRandom(directions).css);
          setFrom(getRandom(fromColors));
          setVia(getRandom(viaColors));
          setTo(getRandom(toColors));
     };

     useEffect(() => {
          if (fromColors && viaColors && toColors) {
               randomize();
          }
     }, [fromColors, viaColors, toColors]);

     useEffect(() => {
          const generateColors = (type) => themeColors.map((color) => (themeColorsWithoutShades.includes(color) ? `${type}-${color}` : themeColorShades.map((shade) => `${type}-${color}-${shade}`))).flat();

          setFromColors(generateColors('from'));
          setViaColors(generateColors('via'));
          setToColors(generateColors('to'));
     }, [themeColors, themeColorsWithoutShades, themeColorShades]);

     return (
          <div className="mt-16 px-2">
               <div className="w-full grid grid-cols-1 gap-8 py-2">
                    {children}
                    <Controls viaColor={viaColor} setViaColor={setViaColor} randomize={randomize} direction={direction} from={from} via={via} to={to}>
                         <CopyCodeModal viaColor={viaColor} direction={direction} from={from} via={via} to={to} />
                         <DownloadModal viaColor={viaColor} direction={direction} from={from} via={via} to={to} />
                    </Controls>
                    <Selects
                         fromColors={fromColors}
                         viaColors={viaColors}
                         toColors={toColors}
                         directions={directions}
                         viaColor={viaColor}
                         direction={direction}
                         setDirection={setDirection}
                         from={from}
                         setFrom={setFrom}
                         via={via}
                         setVia={setVia}
                         to={to}
                         setTo={setTo}
                    />
                    <PreviewGradient textBgDark={textBgDark} setTextBgDark={setTextBgDark} direction={direction} from={from} via={via} viaColor={viaColor} to={to} />
               </div>
          </div>
     );
};

const Controls = ({ viaColor, setViaColor, randomize, children, direction, from, via, to }) => {
     const [savedCustomGradients, setSavedCustomGradients] = useState(JSON.parse(localStorage.getItem('myCustomCollections')) || []);
     const { setAlert, setAlertText } = useContext(Alert);

     const handleALert = (toggle, message) => {
          setAlertText(message);
          setAlert(toggle);
     };

     const addCollection = (color, direction) => {
          const maxCustomCollections = 10;
          let startId = null;
          savedCustomGradients.length ? (startId = parseInt(savedCustomGradients.slice(-1)[0].id.split('-')[1]) + 1) : (startId = 1);
          console.log(startId);
          !savedCustomGradients.some((obj) => obj.code.tailwind === `${direction} ${color}`) && savedCustomGradients.length + 1 <= maxCustomCollections
               ? (setSavedCustomGradients([...savedCustomGradients, { id: `custom-${startId}`, name: `custom-${startId}`, type: 'custom', code: { tailwind: `${direction} ${color}` }, color: color, direction: direction }]),
                 handleALert(true, `🎉 Gradient saved!`))
               : handleALert(true, savedCustomGradients.length + 1 <= maxCustomCollections ? `❌ This gradient already saved!` : `❌ You can only save ${maxCustomCollections} gradients!`);
     };

     useEffect(() => {
          localStorage.setItem('myCustomCollections', JSON.stringify(savedCustomGradients));
     }, [savedCustomGradients]);
     return (
          <div className="flex items-center gap-2 justify-between">
               <div className="flex gap-2">
                    {children}
                    <CardButton label={'Random'} onClick={() => randomize()}>
                         <ArrowPathIcon className={`w-5 h-5 inline-block`} />
                    </CardButton>
                    <CardButton onClick={() => addCollection(`${from} ${via} ${to}`, `${direction}`)} label={'Save'}>
                         <HeartIcon className={`w-5 h-5 inline-block`} />
                    </CardButton>
               </div>
               <Text as="label" size="2">
                    <Flex gap="2" align={'center'}>
                         <Checkbox checked={viaColor} onCheckedChange={() => setViaColor(!viaColor)} /> Via Color
                    </Flex>
               </Text>
          </div>
     );
};

const Selects = ({ fromColors, viaColors, toColors, directions, viaColor, direction, setDirection, from, setFrom, via, setVia, to, setTo }) => {
     return (
          <div className="py-2 flex flex-col gap-10">
               <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 border-gray-400 dark:border-gray-700  ">
                    <Select.Root value={direction} onValueChange={(e) => setDirection(e)} size={{ initial: '3' }}>
                         <Select.Trigger radius="large" />
                         <Select.Content position="popper">
                              {directions.map((item, index) => (
                                   <Select.Item key={index} value={item.css}>
                                        {item.name}
                                   </Select.Item>
                              ))}
                         </Select.Content>
                    </Select.Root>
                    <Select.Root value={from} onValueChange={(e) => setFrom(e)} size={{ initial: '3' }}>
                         <Select.Trigger radius="large" />
                         <Select.Content position="popper">
                              {fromColors.map((color) => (
                                   <Select.Item key={color} value={`${color}`}>{`${color}`}</Select.Item>
                              ))}
                         </Select.Content>
                    </Select.Root>{' '}
                    <Select.Root value={via} onValueChange={(e) => setVia(e)} size={{ initial: '3' }} disabled={!viaColor}>
                         <Select.Trigger radius="large" />
                         <Select.Content position="popper">
                              {viaColors.map((color) => (
                                   <Select.Item key={color} value={`${color}`}>{`${color}`}</Select.Item>
                              ))}
                         </Select.Content>
                    </Select.Root>
                    <Select.Root value={to} onValueChange={(e) => setTo(e)} size={{ initial: '3' }}>
                         <Select.Trigger radius="large" />
                         <Select.Content position="popper">
                              {toColors.map((color) => (
                                   <Select.Item key={color} value={`${color}`}>{`${color}`}</Select.Item>
                              ))}
                         </Select.Content>
                    </Select.Root>
               </div>
          </div>
     );
};

const PreviewGradient = ({ textBgDark, setTextBgDark, direction, from, via, viaColor, to }) => {
     return (
          <div className="py-2 grid grid-cols-1 md:grid-cols-2 gap-5">
               <div className={`relative order-2 md:order-1 w-full aspect-[4/3] rounded-2xl flex justify-center items-center overflow-hidden py-20 ${textBgDark ? 'bg-darks' : 'bg-white'}`}>
                    <div className="absolute top-5 right-5 flex gap-2">
                         <CardButton label={'Change Text Background'} onClick={() => setTextBgDark(!textBgDark)} classes={'bg-none hover:bg-none'}>
                              <LightBulbIcon className={`md:w-4 md:h-4 w-5 h-5 inline-block ${textBgDark ? 'text-white' : 'text-darks'}`}></LightBulbIcon>
                         </CardButton>
                    </div>
                    <p
                         contentEditable="true"
                         spellCheck="false"
                         suppressContentEditableWarning={true}
                         className={`w-auto outline-none truncate text-4xl md:text-5xl lg:text-6xl py-4 px-10 text-transparent bg-clip-text font-extrabold text-center ${direction} ${from} ${viaColor ? via : ''} ${to}`}
                    >
                         Text
                    </p>
               </div>
               <div className={`order-1 md:order-2 w-full aspect-[4/3] rounded-2xl ${direction} ${from} ${viaColor ? via : ''} ${to}`}></div>
          </div>
     );
};

const CopyCodeModal = ({ viaColor, direction, from, via, to }) => {
     const { setAlert, setAlertText } = useContext(Alert);
     const handleCopy = () => {
          navigator.clipboard.writeText(`${direction} ${from} ${viaColor ? via : ''} ${to}`);
          setAlertText('🎉 Copied to clipboard!');
          setAlert(true);
     };
     return (
          <Dialog.Root>
               <Dialog.Trigger>
                    <CardButton label={'Copy code'}>
                         <CodeBracketIcon className={`w-5 h-5 inline-block`} />
                    </CardButton>
               </Dialog.Trigger>
               <Dialog.Content>
                    <Dialog.Title>Copy Code</Dialog.Title>
                    <div className="my-5">
                         <p className="mb-2 text-sm font-medium">Tailwind</p>
                         <div className="relative w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 ">
                              <code className="text-sm w-10">
                                   {direction} {from} {viaColor ? via : ''} {to}
                              </code>
                              <Dialog.Close>
                                   <CardButton onClick={handleCopy} classes="absolute right-2 top-2" label={'Copy Tailwind'}>
                                        <ClipboardIcon className={`w-3 h-3`}></ClipboardIcon>
                                   </CardButton>
                              </Dialog.Close>
                         </div>
                    </div>
                    <Flex justify={'end'}>
                         <Dialog.Close>
                              <Button variant="soft" color="gray">
                                   Cancel
                              </Button>
                         </Dialog.Close>
                    </Flex>
               </Dialog.Content>
          </Dialog.Root>
     );
};

const DownloadModal = ({ viaColor, direction, from, via, to }) => {
     const [ratio, setRatio] = useState('landscape');
     const imageEl = useRef();
     return (
          <Dialog.Root>
               <Dialog.Trigger>
                    <CardButton label={'Download'}>
                         <ArrowDownTrayIcon className={`w-5 h-5 inline-block`} />
                    </CardButton>
               </Dialog.Trigger>

               <Dialog.Content style={{ maxWidth: 450 }}>
                    <Dialog.Title>Download Gradient</Dialog.Title>

                    <div className="w-full flex justify-center my-5">
                         <div ref={imageEl} className={`w-full ${ratio === 'landscape' ? 'aspect-[16/9]' : 'max-w-[200px] aspect-[9/16]'} transition-all duration-300 ${direction} ${from} ${viaColor ? via : ''} ${to}`}></div>
                    </div>

                    <Flex gap="3" mt="4" justify="between" align="center">
                         <RadioGroup.Root defaultValue={ratio} onValueChange={setRatio}>
                              <Flex gap="4" direction={{ initial: 'column', sm: 'row' }}>
                                   <Text as="label" size="2">
                                        <Flex gap="2">
                                             <RadioGroup.Item value="landscape" /> Landscape
                                        </Flex>
                                   </Text>
                                   <Text as="label" size="2">
                                        <Flex gap="2">
                                             <RadioGroup.Item value="portrait" /> Portrait
                                        </Flex>
                                   </Text>
                              </Flex>
                         </RadioGroup.Root>

                         <Flex gap="3" direction={{ initial: 'column-reverse', sm: 'row' }}>
                              <Dialog.Close>
                                   <Button variant="soft" color="gray">
                                        Cancel
                                   </Button>
                              </Dialog.Close>

                              <Button onClick={() => DownloadImage(imageEl, 'Custom Gradient - HueEase')}>Download</Button>
                         </Flex>
                    </Flex>
               </Dialog.Content>
          </Dialog.Root>
     );
};

PlaygroundLayout.Title = Title;
PlaygroundLayout.MainPlayground = MainPlayground;
PlaygroundLayout.Controls = Controls;
PlaygroundLayout.Selects = Selects;
PlaygroundLayout.PreviewGradient = PreviewGradient;
PlaygroundLayout.CopyCodeModal = CopyCodeModal;
PlaygroundLayout.DownloadModal = DownloadModal;

export default PlaygroundLayout;
