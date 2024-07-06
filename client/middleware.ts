'use client';

interface MiddlewareProps {
    req: any;
    res: any;
    next: any;
}

export default function middleware({ req, res, next }: MiddlewareProps) {

    // Checks if the user is authenticated

}