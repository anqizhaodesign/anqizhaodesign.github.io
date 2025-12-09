import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null
    };

    public static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center font-mono">
                    <h1 className="text-4xl text-red-500 mb-4">Something went wrong.</h1>
                    <div className="bg-zinc-900 p-6 rounded-lg max-w-2xl w-full overflow-auto">
                        <h2 className="text-xl text-yellow-500 mb-2">Error:</h2>
                        <pre className="text-sm whitespace-pre-wrap breakdown-all text-gray-300">
                            {this.state.error?.toString()}
                        </pre>
                        <br />
                        <h2 className="text-xl text-yellow-500 mb-2">Component Stack:</h2>
                        <pre className="text-xs whitespace-pre-wrap breakdown-all text-gray-500">
                            {this.state.errorInfo?.componentStack}
                        </pre>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-8 px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
