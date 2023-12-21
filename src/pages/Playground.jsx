import { Select } from '@radix-ui/themes';
import PagesLayout from '../components/layouts/PagesLayout';
import { themeColors, themeColorShades, themeColorsWithoutShades } from '../data/tailwindColors';
import { primaryDirections, radialDirections, conicDirections } from '../data/directions';
import { useState } from 'react';

const PlaygroundPage = () => {
     const directions = [...primaryDirections, ...radialDirections, ...conicDirections];
     const [direction, setDirection] = useState(directions[0].css);
     const [from, setFrom] = useState('from-purple-300');
     const [via, setVia] = useState('via-fuchsia-700');
     const [to, setTo] = useState('to-cyan-900');
     const [type, setType] = useState('background');
     return (
          <div>
               <PagesLayout>
                    <div className="px-2">
                         <h1 className="text-5xl font-semibold text-darks dark:text-white mb-8 xl:text-6xl">Playground</h1>
                    </div>
                    <div className="mt-20 px-2">
                         <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 py-2 ">
                              <div className="py-2 flex flex-col gap-10">
                                   <div className="flex gap-4">
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
                                   </div>
                                   <div className="flex flex-wrap gap-4 border-b border-gray-400 dark:border-gray-700 pb-10 ">
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
                                   <div className="flex flex-col gap-5">
                                        <code className="w-full  px-5 py-2 rounded-lg border border-gray-400 dark:border-gray-700">{`${direction} ${from} ${via} ${to}`}</code>
                                        <code className="w-full  px-5 py-2 rounded-lg border border-gray-400 dark:border-gray-700">{`${direction} ${from} ${via} ${to}`}</code>
                                   </div>
                              </div>
                              <div className="py-2 flex flex-col gap-5">
                                   <div className="flex justify-between items-center px-2">
                                        <Select.Root defaultValue={type} onValueChange={(e) => setType(e)} size={{ initial: '3' }}>
                                             <Select.Trigger radius="large" variant="ghost" />
                                             <Select.Content position="popper">
                                                  <Select.Item value={'text'}>Text</Select.Item>
                                                  <Select.Item value={'background'}>Background</Select.Item>
                                             </Select.Content>
                                        </Select.Root>
                                   </div>
                                   <div className={`${type === 'text' ? 'hidden' : ''} w-full aspect-[4/3] rounded-2xl ${direction} ${from} ${via} ${to}`}></div>
                                   <div className={`${type !== 'text' ? 'hidden' : ''} w-full aspect-[4/3] rounded-2xl flex justify-center items-center bg-darks overflow-hidden py-20`}>
                                        <p
                                             contentEditable="true"
                                             spellCheck="false"
                                             suppressContentEditableWarning={true}
                                             className={`w-auto outline-none text-6xl py-4 px-10 text-transparent bg-clip-text font-extrabold text-center ${direction} ${from} ${via} ${to}`}
                                        >
                                             Text
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </PagesLayout>
          </div>
     );
};

export default PlaygroundPage;
