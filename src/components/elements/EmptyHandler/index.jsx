import { Link } from 'react-router-dom';

const EmptyHandler = ({ type }) => {
     return (
          <div className="w-full flex justify-center">
               <p className="text-gray-500">
                    No gradients yet.{' '}
                    <Link className="text-blue-300 hover:underline" to={type === 'custom' ? '/playground' : '/'}>
                         {type === 'custom' ? 'Generate' : 'Explore'} Gradients.
                    </Link>
               </p>
          </div>
     );
};

export default EmptyHandler;
