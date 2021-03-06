<?php namespace App\Listeners\Events;

use App\Events\RemoveFile;

//use Illuminate\Contracts\Filesystem\Factory;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldBeQueued;

class RemoveFileHandler {
    /**
     * @var Factory
     */
    private $fileSystem;

	/**
	 * Create the event handler.
	 *
	 * @param Factory|Filesystem $fileSystem
	 */
	public function __construct(Filesystem $fileSystem)
	{
		//
        $this->fileSystem = $fileSystem;
    }

	/**
	 * Handle the event.
	 *
	 * @param  RemoveFile  $event
	 * @return void
	 */
	public function handle(RemoveFile $event)
	{
		//dd($event);
		$this->fileSystem->delete($event->path);
	}

}
