import { Link as RadixLink } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

const EmptyHandler = ({ type }) => {
     return (
          <div className="w-full flex justify-center">
               <p className="text-gray-500">
                    No gradients yet.{' '}
                    <RadixLink>
                         <Link to={type === 'custom' ? '/playground' : '/'}>{type === 'custom' ? 'Generate' : 'Explore'} Gradients.</Link>
                    </RadixLink>
               </p>
          </div>
     );
};

export default EmptyHandler;
