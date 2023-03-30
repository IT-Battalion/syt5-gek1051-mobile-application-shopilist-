package at.ac.tgm.shopilist;

import android.content.Context;
import android.os.Bundle;

import com.couchbase.lite.CouchbaseLiteException;
import com.couchbase.lite.Database;
import com.couchbase.lite.DatabaseConfiguration;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        //we need to register our plugins, both here and in our typescript
        registerPlugin(DatabasePlugin.class);

        super.onCreate(savedInstanceState);
    }

}
