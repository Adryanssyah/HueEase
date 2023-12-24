import { Checkbox, Flex, Select, Text } from '@radix-ui/themes';
import PagesLayout from '../components/layouts/PagesLayout';
import { themeColors, themeColorShades, themeColorsWithoutShades } from '../data/tailwindColors';
import { primaryDirections, radialDirections, conicDirections } from '../data/directions';
import { useState } from 'react';
import CardButton from '../components/elements/CardButton';
import { CodeBracketIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const PlaygroundPage = () => {
     const directions = [...primaryDirections, ...radialDirections, ...conicDirections];
     const [direction, setDirection] = useState(directions[0].css);
     const [from, setFrom] = useState('from-purple-300');
     const [via, setVia] = useState('via-fuchsia-700');
     const [to, setTo] = useState('to-teal-400');
     const [viaColor, setViaColor] = useState(false);
     return (
          <div>
               <PagesLayout>
                    <div className="px-2">
                         <h1 className="text-5xl font-semibold text-darks dark:text-white mb-8 xl:text-6xl">Playground</h1>
                         <p className="text-gray-500 dark:text-gray-400 max-w-xl">Generate the gradient color you desire based on the color scale available in Tailwind CSS.</p>
                    </div>
                    <div className="mt-16 px-2">
                         <div className="w-full grid grid-cols-1 gap-4 py-2 ">
                              <div className="py-2 flex flex-col gap-10">
                                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-gray-400 dark:border-gray-700 pb-5 ">
                                        <Select.Root defaultValue={direction} onValueChange={(e) => setDirection(e)} size={{ initial: '3' }}>
                                             <Select.Trigger radius="large" />
                                             <Select.Content position="popper">
                                                  {directions.map((item, index) => (
                                                       <Select.Item key={index} value={item.css}>
                                                            {item.name}
                                                       </Select.Item>
                                                  ))}
                                             </Select.Content>
                                        </Select.Root>
                                        <Select.Root defaultValue={from} onValueChange={(e) => setFrom(e)} size={{ initial: '3' }}>
                                             <Select.Trigger radius="large" />
                                             <Select.Content position="popper">
                                                  {themeColors.map((color, index) => {
                                                       return !themeColorsWithoutShades.includes(color) ? (
                                                            themeColorShades.map((shade, indexx) => <Select.Item key={index + indexx} value={`from-${color}-${shade}`}>{`from-${color}-${shade}`}</Select.Item>)
                                                       ) : (
                                                            <Select.Item key={index} value={`from-${color}`}>{`from-${color}`}</Select.Item>
                                                       );
                                                  })}
                                             </Select.Content>
                                        </Select.Root>{' '}
                                        <Flex direction={'column'} gap={'2'}>
                                             <Select.Root defaultValue={via} onValueChange={(e) => setVia(e)} size={{ initial: '3' }}>
                                                  <Select.Trigger radius="large" />
                                                  <Select.Content position="popper">
                                                       {themeColors.map((color, index) => {
                                                            return !themeColorsWithoutShades.includes(color) ? (
                                                                 themeColorShades.map((shade, indexx) => <Select.Item key={index + indexx} value={`via-${color}-${shade}`}>{`via-${color}-${shade}`}</Select.Item>)
                                                            ) : (
                                                                 <Select.Item key={index} value={`via-${color}`}>{`via-${color}`}</Select.Item>
                                                            );
                                                       })}
                                                  </Select.Content>
                                             </Select.Root>{' '}
                                             <Text as="label" size="2">
                                                  <Flex gap="2" align={'center'}>
                                                       <Checkbox checked={viaColor} onCheckedChange={() => setViaColor(!viaColor)} /> Via Color
                                                  </Flex>
                                             </Text>
                                        </Flex>
                                        <Select.Root defaultValue={to} onValueChange={(e) => setTo(e)} size={{ initial: '3' }}>
                                             <Select.Trigger radius="large" />
                                             <Select.Content position="popper">
                                                  {themeColors.map((color, index) => {
                                                       return !themeColorsWithoutShades.includes(color) ? (
                                                            themeColorShades.map((shade, indexx) => <Select.Item key={index + indexx} value={`to-${color}-${shade}`}>{`to-${color}-${shade}`}</Select.Item>)
                                                       ) : (
                                                            <Select.Item key={index} value={`to-${color}`}>{`to-${color}`}</Select.Item>
                                                       );
                                                  })}
                                             </Select.Content>
                                        </Select.Root>
                                   </div>
                              </div>
                              <div className="py-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                                   <div className={`relative order-2 md:order-1 w-full aspect-[4/3] rounded-2xl flex justify-center items-center bg-darks overflow-hidden py-20`}>
                                        <div className="absolute top-5 right-5 flex gap-2">
                                             <CardButton label={'Change Text Background'}>
                                                  <CodeBracketIcon className="w-5 h-5 inline-block text-white"></CodeBracketIcon>
                                             </CardButton>
                                             <CardButton label={'Change Text Background'}>
                                                  <LightBulbIcon className="w-5 h-5 inline-block text-white"></LightBulbIcon>
                                             </CardButton>
                                        </div>
                                        <p
                                             contentEditable="true"
                                             spellCheck="false"
                                             suppressContentEditableWarning={true}
                                             className={`w-auto outline-none truncate text-6xl py-4 px-10 text-transparent bg-clip-text font-extrabold text-center ${direction} ${from} ${viaColor ? via : ''} ${to}`}
                                        >
                                             Text
                                        </p>
                                   </div>
                                   <div className={`order-1 md:order-2 w-full aspect-[4/3] rounded-2xl ${direction} ${from} ${viaColor ? via : ''} ${to}`}></div>
                              </div>
                              <div className="flex flex-col gap-5 ">
                                   <code className="w-full  px-5 py-3 rounded-lg border border-gray-400 dark:border-gray-700">{`${direction} ${from} ${viaColor ? via : ''} ${to}`}</code>
                              </div>
                         </div>
                    </div>
               </PagesLayout>
          </div>
     );
};

export default PlaygroundPage;
