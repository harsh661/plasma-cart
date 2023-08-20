import Grid from "./Grid"

interface LoadingProps {
  details?: boolean
}

const Loading: React.FC<LoadingProps> = ({ details }) => {
  return (
    <Grid>
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <div className={`flex flex-col gap-2 ${details && 'h-64 md:h-72 lg:h-80'}`}>
          <div key={item} className="w-44 sm:w-48 md:w-52 lg:w-56 xl:w-64 flex-shrink-0 aspect-square bg-light-gray animate-pulse rounded-md" />
          {details && (
            <>
              <span className="bg-light-gray animate-pulse h-5 w-2/3" />
              <span className="bg-light-gray animate-pulse h-5 w-1/3" />
            </>
          )}
        </div>
      ))}
    </Grid>
  )
}

export default Loading
