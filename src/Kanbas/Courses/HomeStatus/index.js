function HomeStatus() {
    return (
        <div>
        <h2 class="mt-4">Course Status</h2>
        <div class="mb-3 row">
            <div class="col">
                <button class="btn btn-secondary">Unpublished</button>
            </div>
            <div class="col">
                <button class="btn btn-success">Published</button>
            </div>
        </div>
        
        <ul class="list-group mb-4">
            <li class="list-group-item"><a href="#">Importing Existing content</a></li>
            <li class="list-group-item"><a href="#">Import from Commons</a></li>
            <li class="list-group-item"><a href="#">Choose from Home Page</a></li>
            <li class="list-group-item"><a href="#">View Course Stream</a></li>
            <li class="list-group-item"><a href="#">New Announcement</a></li>
            <li class="list-group-item"><a href="#">New Analytics</a></li>
            <li class="list-group-item"><a href="#">View Course Notifications</a></li>
        </ul>

        <h2 class="mt-4">Coming Up</h2>
        <a class="text-red mb-3 d-block" href="#">View Calendar</a>
        <ul class="list-unstyled">
            <li class="mb-1"><a class="text-red" href="#">Lecture CS5610 Sep7 at 11:45 am</a></li>
            <li class="mb-1"><a class="text-red" href="#">Lecture CS4550 Sep 11 at 11:45 am</a></li>
            <li class="mb-1"><a class="text-red" href="#">Lecture CS5610 Sep 11 at 6 pm</a></li>
        </ul>
</div>
    );
}
export default HomeStatus;